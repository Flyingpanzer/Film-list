export const parseFilmFile = text => {
  const filmArray = text.split("\r\n\r\n");

  const parsedArray = filmArray.map(filmString => {
    const filmAttributes = filmString.split("\r\n");

    const filmTitle = filmAttributes[0].replace("Title: ", "");
    const filmYear = filmAttributes[1].replace("Release Year: ", "");
    const filmFormat = filmAttributes[2].replace("Format: ", "");
    const filmStars = filmAttributes[3].replace("Stars: ", "");

    return {
      filmTitle,
      filmYear,
      filmFormat,
      filmStars
    };
  });

  return parsedArray;
};
