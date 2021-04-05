(function() {
    const quotes = [
      {
        quote:
          "This is the book about which there is no doubt, A guidance for those conscious of Allah.",
        author: "-Quran 2:2"
      },
      {
        quote:
          "And Say: My lord, Increase me in knowledge.",
        author: "– Quran 20:114"
      },
      {
        quote:
          "Do not despair of the mercy of Allah.",
        author: "-Quran 39:53"
      },
      {
        quote: "So, Remember Me! I will Remember You!",
        author: "-Quran 2:152"
      },
      {
        quote:
          "Indeed, My lord is the hearer of supplication.",
        author: "-Quran 14:30"
      },
      {
        quote:
          "And he is with you wherever you are.",
        author: " – Quran 57:4"
      }
    ];
  
   const btn = document.querySelector("button");
   const text =  document.querySelector("#quote");
   const author = document.querySelector(".author");
   btn.addEventListener("click", function() {
       let index = Math.floor(Math.random() * quotes.length);
       text.textContent = quotes[index].quote;
       author.textContent = quotes[index].author;
  
   })
  })();