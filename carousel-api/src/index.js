const app = require("express")();
const cors = require("cors");
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3600;

app.use(cors());
app.use(bodyParser.json());

const carouselData = 
  {
    slides: [
      {
        image: 'http://unsplach.com/...',
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        image: 'http://unsplach.com/...',
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        image: 'http://unsplach.com/...',
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        image: 'http://unsplach.com/...',
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        image: 'http://unsplach.com/...',
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        image: 'http://unsplach.com/...',
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        image: 'http://unsplach.com/...',
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        image: 'http://unsplach.com/...',
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        image: 'http://unsplach.com/...',
        title: "Lorem ipsum",
        subTitle: "Lorem"
      },
      {
        image: 'http://unsplach.com/...',
        title: "Lorem ipsum",
        subTitle: "Lorem"
      }
    ]
  };

app.get("/api/carousel", (req, res) => {

  let numberOfSlidesToFecth = req.query.slides || 5;
  console.log(numberOfSlidesToFecth);

  const filteredSlideResult = carouselData.slides.slice(0,numberOfSlidesToFecth);

  return res.send(filteredSlideResult).status(200);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
