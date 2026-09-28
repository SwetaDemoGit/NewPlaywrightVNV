interface Success {
  status: "success";
  data: string;
}

interface ErrorResponse {
  status: "error";
  message: string;
}

type Response = Success | ErrorResponse;

function handleResponse(response: Response): void {
  if (response.status === "success") {
    console.log(response.data);
  } else {
    console.log(response.message);
  }
}

handleResponse({
  status: "success",
  data: "User loaded successfully"
});

handleResponse({
  status: "error",
  message: "User not found"
});
