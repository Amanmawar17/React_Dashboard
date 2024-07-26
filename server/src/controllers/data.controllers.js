import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { Data } from "../models/data.models.js";

const sendData = asyncHandler(async (req, res) => {
  const {
    end_year,
    intensity,
    sector,
    topic,
    insight,
    url,
    region,
    start_year,
    impact,
    added,
    published,
    country,
    relevance,
    pestle,
    source,
    title,
    likelihood,
  } = req.body;

  const data = new Data({
    end_year,
    intensity,
    sector,
    topic,
    insight,
    url,
    region,
    start_year,
    impact,
    added,
    published,
    country,
    relevance,
    pestle,
    source,
    title,
    likelihood,
  });

  try {
    const data = await Data.insertMany(req.body);
    res.status(201).send(new apiResponse(200, data, "Data is send"));
  } catch (error) {
    throw new apiError(
      400,
      error,
      "Something went wrong while sending the data"
    );
  }
});

const getData = asyncHandler(async (req, res) => {
  try {
    const data = await Data.find();
    res.status(201).json(new apiResponse(200, data, "Data is reterived"));
  } catch (error) {
    throw new apiError(
      500,
      error,
      "Something went wrong while getting the data"
    );
  }
});

export { sendData, getData };
