import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CustomWorkCloud from "../CustomWorkCloud";

type Props = {};

const HotTopicsCard = (props: Props) => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>Click on a topic to start quiz on it!</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <CustomWorkCloud/>
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
