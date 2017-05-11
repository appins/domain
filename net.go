package main

import (
  "fmt"
  "io"
  "os"
  "strings"
  "net/http"
)

// Handle all trafic to '/' and all other misc file requests
func handleRoot(w http.ResponseWriter, r *http.Request) {
  defer r.Body.Close()

  if strings.Contains(r.URL.Path, ".."){
    io.WriteString(w, "404 page not found")
    return
  }

  if r.URL.Path == "/" {
    dat, _ := os.Open("public/index.html")
    io.Copy(w, dat)
    return
  }

  if r.URL.Path == "/id/" || r.URL.Path == "/id" {
    dat, _ := os.Open("public/id/index.html")
    io.Copy(w, dat)
    return
  }

  dat, err := os.Open("public/" + r.URL.Path)
  if err != nil {
    panic(err)
    fmt.Println("404 page requested:", r.URL.Path)
    io.WriteString(w, "404 page not found")
    return
  }

  // Variable for holding the conent type
  var cType string

  // Get the content type by getting the string after the first .
  switch strings.Split(r.URL.Path, ".")[1] {
  case "css":
    cType = "text/css"
  case "html":
    cType = "text/html"
  case "js":
    cType = "application/javascript"
  default:
    cType = "text/plain"
  }

  w.Header().Add("Content-Type", cType)
  io.Copy(w, dat)

}
