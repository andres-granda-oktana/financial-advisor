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

    //Calculate risk level fractions to operate
    const riskLevelDataFraction = {}
    for ( const [key, value] of Object.entries(riskLevelData)){
        riskLevelDataFraction[key] = value/100;
    }

    //Calculate total amount
    let totalAmount=0;
    for ( const p in amounts) { totalAmount += parseInt(amounts[p]) }
    
    //Calculate new ideal amounts with risk level selected
    const newAmounts = {}
    for ( const [key, value] of Object.entries(riskLevelDataFraction)){
        newAmounts[key] = round(totalAmount * value);
    }

    //Calculate differences between current amounts and ideal amounts
    const differences = {}
    for ( const [key, value] of Object.entries(newAmounts)){
        differences[key] = round(value - amounts[key]);
    }

    //Get differences with sign for display label
    const differencesLabels = {}
    for ( const [key, value] of Object.entries(differences)){
        differencesLabels[key] = value <= 0 ? value : "+" + value;
    }

    //Classify differences in positives and negatives
    let positive = new Map();
    let negative = new Map();
    for ( const [key, value] of Object.entries(differences)){
        if(value > 0){
            positive.set(key, value);
        } else if ( value < 0){
            negative.set(key, value);
        }
    }

    //Sort positives and negatives
    const positiveSorted = new Map([...positive.entries()].sort((a, b) => a[1] - b[1]));
    const negativeSorted = new Map([...negative.entries()].sort((a, b) => b[1] - a[1]));
    
    //Calc transfers array
    let transfers = [];

    let breakFlag = false;
    let continueFlag = false;

    while( negativeSorted.size > 0 ){
        console.log(negativeSorted.size)
        continueFlag = false;

        breakFlag=false
        //(1) SEARCH FOR EQUAL
        for(const [keyN, valN] of negativeSorted){
            if(breakFlag){ break; }
            for(const [keyP, valP] of positiveSorted){
                if(valN+valP===0){
                    transfers.push({
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
        if(continueFlag){continue;}

        breakFlag=false
        //(2) SEARCH FOR  MINOR POSITIVE
        for(const [keyN, valN] of negativeSorted){
            if(breakFlag){ break; }
            for(const [keyP, valP] of positiveSorted){
                if(Math.abs(valN)>valP){
                    transfers.push({
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
        if(continueFlag){continue;}

        breakFlag=false
        //(3) SEARCH FOR  MAYOR POSITIVE
        for(const [keyN, valN] of negativeSorted){
            if(breakFlag){ break; }
            for(const [keyP, valP] of positiveSorted){
                if(Math.abs(valN)<valP){
                    transfers.push({
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
        if(continueFlag){continue;}
        break;
    }

    return({
        newAmounts: newAmounts,
        differences: differencesLabels,
        transfers: transfers
    })
}