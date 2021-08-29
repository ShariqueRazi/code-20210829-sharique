const st=require('../index');
var ip=[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", "HeightCm": 167, "WeightKg": 82},
{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 15,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": -45}, {"Gender": "Female", "HeightCm": 167, "WeightKg": 0}];

describe("Testing with Jest", () => {
    test("Addition",async() => {

      const op=st.BmiCalculator(0,ip);
      const sum = op['Count'];

      expect(sum).toEqual(1);
    });
  });