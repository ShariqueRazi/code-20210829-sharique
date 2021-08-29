var overWeightCount=0;
var opData=[];
var jsonObject={};

function BmiCalculator(overWeightCount,ip){
ip.forEach(element => {
    overWeightCount=processEachRecord(element);
    opData.push(element);

});
jsonObject["Count"]= overWeightCount;
jsonObject["Output Data"]= opData;

return jsonObject;
}

function processEachRecord(value){
    try{
        if(value.WeightKg != "" && value.HeightCm != "" && !isNaN(value.WeightKg) && !isNaN(value.HeightCm) && value.HeightCm>30 && value.WeightKg>1){
        var bMI=parseFloat((value.WeightKg/((value.HeightCm/100)*(value.HeightCm/100))).toFixed(2));
        let bMICategory,healthRisk;
        switch(true){
            case (bMI<=18.4) :
                bMICategory="Underweight";
                healthRisk="Malnutrition risk";
                break;
            case (bMI>=18.5 && bMI<=24.9):
                bMICategory="Normal weight";
                healthRisk="Low risk";
                break;
            case (bMI>=25 && bMI<=29.9):
                bMICategory="Overweight";
                healthRisk="Enhanced risk";
                overWeightCount++;
                break;
            case (bMI>=30 && bMI<=34.9):
                bMICategory="Moderately obese";
                healthRisk="Medium risk";
                break;
            case (bMI>=35 && bMI<=39.9):
                bMICategory="Severely obese";
                healthRisk="High risk";
                break;
           default:
                bMICategory="Very severely obese";
                healthRisk="Very high risk";
                break;
            }
            value.BMI=bMI;
            value.Category=bMICategory;
            value.HealthRisk=healthRisk;
        }
        else{
            bMICategory="Couldnt be calculated";
            healthRisk="Couldnt be calculated";
            value.BMI="Invalid Input";
            value.Category=bMICategory;
            value.HealthRisk=healthRisk;
        }
        return overWeightCount;
    }
    catch(Error){
        bMICategory="Couldnt be calculated";
        healthRisk="Couldnt be calculated";
        value.BMI="Invalid Input";
        value.Category=bMICategory;
        value.HealthRisk=healthRisk;
        return overWeightCount;
    }
}

module.exports.BmiCalculator = BmiCalculator;