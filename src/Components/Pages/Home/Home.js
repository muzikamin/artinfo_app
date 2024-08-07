import { listData } from "../../../api";

export const Home = () => {
  const data = listData;
  console.log(data);

  return <div>홈입니당</div>;
};
