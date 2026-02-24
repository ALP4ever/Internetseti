import React from "react";
import Button from "../Button";
import { Input } from "../Input";
import  Text  from "../Text";

export const Home = () => {
  function setIsVisible(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <h1>Ритуальные услуги</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        color="primary"
        size="large"
        title="Добавить товар"
        // onClick={() => setIsVisible(true)}
      ></Button>
      <Input color="primary"
        size="large"
        title="Сигма: ">
      </Input>

      <Text color="secondary"
        size="large"
        title="Аллахумма инни аузу бикя мин аль-хамми уаль-хазан уаль-аджзи уаль-кясал уаль-джубни уаль бухли, уа аузу бикя мин галябати-ддайни уа кахри-рриджаль ">
      </Text>
      <Button
        color="primary"
        size="large"
        title="OPOPOP"
        onClick={() => setIsVisible()}
      ></Button>
    </>
  );
};
