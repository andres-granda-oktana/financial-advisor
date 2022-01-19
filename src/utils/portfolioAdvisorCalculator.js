export function validateNumericInput (newValue) {

    for(let i=0; i<newValue.length ;i++ ){
        if(newValue[i]===' ' || isNaN(newValue[i])){
            return false;
        }
    }
    return true;

}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

export function calculatePortfolioTransfers (amounts, riskLevelData) {

    const riskLevelDataFraction = {
        bonds:      riskLevelData?.bonds/100,
        largeCap:   riskLevelData?.largeCap/100,
        midCap:     riskLevelData?.midCap/100,
        foreign:    riskLevelData?.foreign/100,
        smallCap:   riskLevelData?.smallCap/100,
    }

    let totalAmount=0

    for (const [keyAmount, valueAmount] of Object.entries(amounts)) {totalAmount += parseInt(valueAmount);}  

    const newAmountTemp={
        bonds:      round(totalAmount * riskLevelDataFraction.bonds),
        largeCap:   round(totalAmount * riskLevelDataFraction.largeCap),
        midCap:     round(totalAmount * riskLevelDataFraction.midCap),
        foreign:    round(totalAmount * riskLevelDataFraction.foreign),
        smallCap:   round(totalAmount * riskLevelDataFraction.smallCap)
    }

    const differenceValTemp={
        bonds:      round(newAmountTemp.bonds     - amounts.bonds),
        largeCap:   round(newAmountTemp.largeCap  - amounts.largeCap),
        midCap:     round(newAmountTemp.midCap    - amounts.midCap),
        foreign:    round(newAmountTemp.foreign   - amounts.foreign),
        smallCap:   round(newAmountTemp.smallCap  - amounts.smallCap),
    }

    const differenceTemp={
        bonds:      differenceValTemp.bonds<=0 ? differenceValTemp.bonds : "+"+differenceValTemp.bonds,
        largeCap:   differenceValTemp.largeCap<=0 ? differenceValTemp.largeCap : "+"+differenceValTemp.largeCap,
        midCap:     differenceValTemp.midCap<=0 ? differenceValTemp.midCap : "+"+differenceValTemp.midCap,
        foreign:    differenceValTemp.foreign<=0 ? differenceValTemp.foreign : "+"+differenceValTemp.foreign,
        smallCap:   differenceValTemp.smallCap<=0 ? differenceValTemp.smallCap : "+"+differenceValTemp.smallCap,
    }

    let positive = new Map();
    let negative = new Map();

    if(differenceValTemp.bonds > 0){
        positive.set("bonds",differenceValTemp.bonds);
    }else if(differenceValTemp.bonds < 0){
        negative.set("bonds",differenceValTemp.bonds);
    }

    if(differenceValTemp.largeCap > 0){
        positive.set("largeCap",differenceValTemp.largeCap);
    }else if(differenceValTemp.largeCap < 0){
        negative.set("largeCap",differenceValTemp.largeCap);
    }

    if(differenceValTemp.midCap > 0){
        positive.set("midCap",differenceValTemp.midCap);
    }else if(differenceValTemp.midCap < 0){
        negative.set("midCap",differenceValTemp.midCap);
    }

    if(differenceValTemp.foreign > 0){
        positive.set("foreign",differenceValTemp.foreign);
    }else if(differenceValTemp.foreign < 0){
        negative.set("foreign",differenceValTemp.foreign);
    }

    if(differenceValTemp.smallCap > 0){
        positive.set("smallCap",differenceValTemp.smallCap);
    }else if(differenceValTemp.smallCap < 0){
        negative.set("smallCap",differenceValTemp.smallCap);
    }

    // console.log("positive",positive);
    // console.log("negative",negative);

    const positiveSorted = new Map([...positive.entries()].sort((a, b) => a[1] - b[1]));
    const negativeSorted = new Map([...negative.entries()].sort((a, b) => b[1] - a[1]));
    
    // console.log("positiveSorted",positiveSorted);
    // console.log("negativeSorted",negativeSorted);

    let transfersTemp = [];

    let breakFlag = false;
    let continueFlag = false;

    while( negativeSorted.size > 0 ){
        continueFlag = false;
        breakFlag=false
        //(1) EQUAL
        // console.log("(1) EQUAL")
        for(const [keyN, valN] of negativeSorted){
            if(breakFlag){ break; }
            for(const [keyP, valP] of positiveSorted){
                // console.log(valN, valP)
                if(valN+valP===0){
                    // console.log("equal-break")
                    transfersTemp.push({
                        from: keyN,
                        to: keyP,
                        val: valP
                    });
                    negativeSorted.delete(keyN)
                    positiveSorted.delete(keyP)
                    breakFlag=true;
                    continueFlag=true;
                    break;
                }
            }
        }

        // console.log("positiveSorted",positiveSorted);
        // console.log("negativeSorted",negativeSorted);
        if(continueFlag){continue;}

        breakFlag=false

        //(2) MINOR POSITIVE
        // console.log("(2) MINOR POSITIVE")
        for(const [keyN, valN] of negativeSorted){
            if(breakFlag){ break; }
            for(const [keyP, valP] of positiveSorted){
                // console.log(valN, valP)
                if(Math.abs(valN)>valP){
                    // console.log("minor positive-break")
                    transfersTemp.push({
                        from: keyN,
                        to: keyP,
                        val: valP
                    });
                    negativeSorted.set(keyN,round(valN+valP))
                    positiveSorted.delete(keyP)
                    breakFlag=true;
                    continueFlag=true;
                    break;
                }
            }
        }

        // console.log("positiveSorted",positiveSorted);
        // console.log("negativeSorted",negativeSorted);
        if(continueFlag){continue;}

        breakFlag=false

        //(3) MAYOR POSITIVE
        // console.log("(3) MAYOR POSITIVE")
        for(const [keyN, valN] of negativeSorted){
            if(breakFlag){ break; }
            for(const [keyP, valP] of positiveSorted){
                // console.log(valN, valP)
                if(Math.abs(valN)<valP){
                    // console.log("mayor positive-break")
                    transfersTemp.push({
                        from: keyN,
                        to: keyP,
                        val: Math.abs(valN)
                    });
                    negativeSorted.delete(keyN)
                    positiveSorted.set(keyP,round(valP+valN))
                    breakFlag=true;
                    continueFlag=true;
                    break;
                }
            }
        }

        // console.log("positiveSorted",positiveSorted);
        // console.log("negativeSorted",negativeSorted);
        if(continueFlag){continue;}

        break;
    }

    // console.log("transfersTemp",transfersTemp);

    return({
        newAmounts: newAmountTemp,
        differences: differenceTemp,
        transfers: transfersTemp
    })
}