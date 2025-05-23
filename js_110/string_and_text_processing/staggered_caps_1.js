function staggeredCase(str) {
  return console.log(
    str
      .split("")
      .map((char, idx) =>
        idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("")
  );
}

staggeredCase("I Love Launch School!"); // "I LoVe lAuNcH ScHoOl!"
staggeredCase("ALL_CAPS"); // "AlL_CaPs"
staggeredCase("ignore 77 the 4444 numbers"); // "IgNoRe 77 ThE 4444 nUmBeRs"
