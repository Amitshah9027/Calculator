import React from "react";
import { useState } from "react";
import { Section, Container, Numbers, TextArea } from "./Calculator.styled";
import Button from "../operations";

const Calculator = () => {
  const [initialValue, setinitialValue] = useState(null);
  const [finalValue, setfinalValue] = useState("0");
  const [ops, setOps] = useState(null);

  const CalcOperation = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (secondValue) => secondValue,
  };
  const handleOperations = () => {};

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalcOperation) {
      if (ops === null) {
        setOps(value);
        setinitialValue(finalValue);
        setfinalValue("");
      }
      if (ops) {
        setOps(value);
      }
      if (initialValue && ops && finalValue) {
        performOperation();
      }
    } else if (value === "AC") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percent();
    }
  };

  const performOperation = () => {
    let temp = CalcOperation[ops](
      parseFloat(initialValue),
      parseFloat(finalValue)
    );

    setOps(null);
    setfinalValue(String(temp));
    setinitialValue(null);
  };

  const handleNum = (number) => {
    setfinalValue(finalValue === "0" ? String(number) : finalValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(finalValue)) {
      setfinalValue(finalValue + ".");
    }
  };
  const percent = () => {
    setfinalValue(parseFloat(finalValue) / 100);
    if (initialValue && finalValue === "") {
      setinitialValue(parseFloat(initialValue) / 100);
    }
  };
  const changeSign = () => {
    setfinalValue(parseFloat(finalValue) * -1);
    console.log("setfinalValue", finalValue);
  };
  const clearData = () => {
    setfinalValue("0");
    setinitialValue(0);
  };

  return (
    <Section>
      <Container>
        <TextArea>{finalValue}</TextArea>
      </Container>
      <Numbers>
        <Button className="button" keyValues={"AC"} onClick={handleOperation}>
          AC
        </Button>
        <Button className="button" keyValues={"\xB1"} onClick={handleOperation}>
          +/-
        </Button>
        <Button className="button" keyValues={"%"} onClick={handleOperation}>
          %
        </Button>
        <Button className="operator" keyValues={"/"} onClick={handleOperation}>
          ÷
        </Button>
        <Button className="digit" keyValues={7} onClick={handleOperation}>
          7
        </Button>
        <Button className="digit" keyValues={8} onClick={handleOperation}>
          8
        </Button>
        <Button className="digit" keyValues={9} onClick={handleOperation}>
          9
        </Button>
        <Button className="operator" keyValues={"*"} onClick={handleOperation}>
          *
        </Button>
        <Button className="digit" keyValues={4} onClick={handleOperation}>
          4
        </Button>
        <Button className="digit" keyValues={5} onClick={handleOperation}>
          5
        </Button>
        <Button className="digit" keyValues={6} onClick={handleOperation}>
          6
        </Button>
        <Button className="operator" keyValues={"-"} onClick={handleOperation}>
          -
        </Button>
        <Button className="digit" keyValues={1} onClick={handleOperation}>
          1
        </Button>
        <Button className="digit" keyValues={2} onClick={handleOperation}>
          2
        </Button>
        <Button className="digit" keyValues={3} onClick={handleOperation}>
          3
        </Button>
        <Button className="operator" keyValues={"+"} onClick={handleOperation}>
          +
        </Button>
        <Button className="num" keyValues={0} onClick={handleOperation}>
          0
        </Button>
        <Button className="digit" keyValues={"."} onClick={handleOperation}>
          .
        </Button>
        <Button className="operator" keyValues={"="} onClick={handleOperation}>
          =
        </Button>
      </Numbers>
    </Section>
  );
};

export default Calculator;
