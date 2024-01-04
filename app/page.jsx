"use client"
import ReadMore from "./components/ReadMore/ReadMore"

export default function Top() {
  return (
    <>
      <div style={{ fontSize: "32px" }}>Home Page</div>
      <p>新着記事</p>
      <ReadMore></ReadMore>
      <p>人気記事</p>
      <ReadMore sort="popular"></ReadMore>
    </>
  );
}