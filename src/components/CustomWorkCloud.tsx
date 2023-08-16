"use client";
import { useTheme } from "next-themes";
import React from "react";
import WordCloud from "react-d3-cloud";

type Props = {};

const data = [
  { text: "Hey", value: 3 },
  { text: "JavaScript", value: 10 },
  { text: "Data Structure", value: 9 },
  { text: "Alogorithms", value: 7 },
  { text: "Next Js", value: 5 },
];

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};

const CustomWorkCloud = (props: Props) => {
  const theme = useTheme();

  return (
    <WordCloud
      height={500}
      data={data}
      font="Times"
      fontSize={fontSizeMapper}
      rotate={0}
      padding={10}
      fill={theme.theme == "dark" ? "white" : "black"}
    />
  );
};

export default CustomWorkCloud;
