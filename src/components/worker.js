import axios from "axios";

onmessage = function (e) {
  if (e.data.sending !== undefined) {
    const formData = {
      username: e.data.sending.username,
      topic: e.data.sending.topic,
      review: e.data.sending.review,
    };
    /** I have used node rest api here for checking the form post functionality ***/
    axios
      .post(`http://localhost:4000/api/v1/formdata`, formData, {
        credentials: "include",
        method: "POST",
        mode: "cors",
      })
      .then((res) => {
        console.log(res.data);
      });
  }
};
