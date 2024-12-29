import DBConnection from "@/app/lib/config/connection";
import MobileModel from "@/app/lib/models/Mobile";
import React, { FC } from "react";

type Props = {};

const page: FC = () => {
  const addProductHandler = async (formData: FormData): Promise<void> => {
    "use server";
    try {
      await DBConnection();
      const title = formData.get("title");
      const model = formData.get("model");
      const price = formData.get("price");

      if (!title || !model || !price) {
        console.error("All fields are required..");
        return;
      }

      console.log({ title, model, price });

      await MobileModel.create({ title, model, price });
      console.log("Mobile addedd successfully!!...");
    } catch (error) {
      console.error("Error adding mobile: ", error);
    }
  };

  return (
    <div>
      <form action={addProductHandler}>
        <h1>Server Actions</h1>
        <input
          type="text"
          name="title"
          id=""
          className="m-5 bg-transparent border border-blue-500 rounded p-2"
        />
        <br />
        <input
          type="text"
          name="model"
          id=""
          className="m-5 bg-transparent border border-blue-500 rounded p-2"
        />
        <br />
        <input
          type="text"
          name="price"
          id=""
          className="m-5 bg-transparent border border-blue-500 rounded p-2"
        />
        <br />
        <button
          type="submit"
          className="border border-blue-500 p-5 rounded-lg m-5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
