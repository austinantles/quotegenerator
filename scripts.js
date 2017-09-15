var quotes = [
    {
      quote: "If I told you I’ve worked hard to get where I’m at, I’d be lying, because I have no idea where I am right now.",
      author: "Jared Kintz"
    },
    {
      quote: "When pain brings you down, don't be silly, don't close your eyes and cry, you just might be in the best position to see the sun shine.",
      author: "Alanis Morissette"
    },
    {
      quote: "When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car.",
      author: "Bob Monkhouse"
    },
    {
      quote: "I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.",
      author: "Elayne Boosler"
    },
    {
      quote: "Always borrow money from a pessimist. He won’t expect it back.",
      author: "Oscar Wilde"
    },
    {
      quote: "The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.",
      author: "Mark Russel"
    },
    {
      quote: "Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.",
      author: "Robert Bloch"
    }
  ]
  changeQuote();
  
  function changeQuote(){
      var quote= getQuote(quotes);
    $(".quote").html("<p class='quote'>"+"\""+ quote.quote+ "\""+"      </p>");
    $(".authors").text(quote.author);
      $(".twitter-share-button").remove();
      twttr.widgets.createShareButton(
      "#",
     document.getElementById('container'),
      {
        text: "\"" + quote.quote + "\"" + " " +"-" + " "+ quote.author,
        size: "large"
      }
    );
  }
  
  $(".newQuote").on("click",function(){
    changeQuote(); 
  });
  
  
  
  function getQuote(quotes){
    // use a random number to get quote from array
    var quoteNumber = Math.floor(Math.random() * (quotes.length + 1));
    return quotes[quoteNumber];
  }
  
  