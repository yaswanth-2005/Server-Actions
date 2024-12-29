import DBConnection from "@/app/lib/config/connection";
import MobileModel, { IMobile } from "@/app/lib/models/Mobile";

export default async function MobileProducts(): Promise<JSX.Element> {
  await DBConnection();
  const allMobiles: IMobile[] = await MobileModel.find({});

  return (
    <>
      {allMobiles.map((item) => {
        return (
          <div key={item._id?.toString()}>
            <div>Mobile Name: {item.title}</div>
            <div>Model: {item.model}</div>
            <div>Price: {item.price}</div>
            <hr />
          </div>
        );
      })}
    </>
  );
}
