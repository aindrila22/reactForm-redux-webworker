import { formAction } from "./form-slice";

export const reviewForm = (data) => {
  return async (dispatch) => {
    try {
      const response = await data;
      dispatch(
        formAction.getInfo({
          topic: response.topic,
          username: response.username,
          review: response.review,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
