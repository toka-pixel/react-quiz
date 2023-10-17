import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AnswerType } from "../../shared/Answer.type";

type AnswersProps = {
  answersData: Function;
};

const AnswerModel = {
  id: null,
  is_true: false,
  text: "",
};

const AnswerForm: React.FC<AnswersProps> = ({ answersData }) => {
  const [inputFieldsAnswer, setInputFieldsAnswer] = useState<AnswerType[]>([
    AnswerModel,
  ]);

  const handleAddFields = () => {
    const values = [...inputFieldsAnswer];
    setInputFieldsAnswer((prev) => [
      ...prev,
      {
        text: "",
        id: null,
        is_true: false,
      },
    ]);
  };

  const handleInputChange = (index: number, event: any) => {
    const values = [...inputFieldsAnswer];
    const { name, value, checked } = event.target;

    const newInputFields = inputFieldsAnswer.map((inputField, id) => {
      if (index == id) {
        return {
          ...inputField,
          [name]: name === "text" ? value : checked,
        };
      } else return inputField;
    });
    setInputFieldsAnswer(newInputFields);
  };

  useEffect(() => {
    answersData(inputFieldsAnswer);
  }, [inputFieldsAnswer]);

  return (
    <div>
      <Button
        variant="outlined"
        type="button"
        onClick={() => handleAddFields()}
        sx={{ display: "flex", justifyContent: "start", marginBottom: "15px" }}
      >
        + Add Answer
      </Button>
      {inputFieldsAnswer.map((inputField, index) => (
        <Box
          key={index}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <TextField
            required
            label="Answer Name"
            defaultValue=""
            name="text"
            placeholder="Answer Name"
            sx={{ width: "80%", marginBottom: "15px", marginRight: "10px" }}
            value={inputField.text}
            onChange={(event) => handleInputChange(index, event)}
          />

          <FormControlLabel
            control={
              <Checkbox
                value={inputField.is_true}
                name="is_true"
                onChange={(event) => handleInputChange(index, event)}
              />
            }
            label="is true"
          />
        </Box>
      ))}
    </div>
  );
};

export default AnswerForm;
