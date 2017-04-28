package main

import (
  "fmt"
  "net/http"
  "log"
)

func main()  {
  fmt.Println("Starting server")
  http.HandleFunc("/", handleRoot)

  log.Fatal(http.ListenAndServe(":8000", nil))
  fmt.Println("Server is running on port 8000")
}
