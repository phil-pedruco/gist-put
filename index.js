#!/usr/bin/env node

var post_gist = require("./post")
  , program = require("commander")

program
  .version("0.0.0")
  .usage("[options] <file1, file2>")
  .option("-u, --public", "Make a public gist on your account (It's private by default). Needs to read your authentication details from `git credential fill`.")
  .option("-a, --anonymous", "Make an anonymous gist")
  .option('-d, --description <string>', "A description for your gist", String)

program.on("--help", function(){
  //additional help?
})

// TODO, if (program.args.length === 0){ 
// // Open editor and then on quite make a
// // gist of the file 
// }

program.parse(process.argv)

var privacy = ["anonymous", "public", "private"]
  .some(function(d, i, arr){
    privacy = arr[i]
    if (arr[i] == "private"){
      return true
    }
    return program[d]
  })

post_gist(program.args, privacy, process.description) 