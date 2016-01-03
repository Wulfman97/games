$(document).ready(function(){
  $('.card-holder').click(function(){
    matchCard = $(this).find('.match-card');
    if(matchCard.hasClass('matched')){
      alert('You have already matched that card!')
      return
    }
    matchCard.removeClass('hide').addClass('visible_card');
    visibleCards = $('.visible_card')
    if(visibleCards.length == 2)
      firstMatchClass = '';
      visibleCards.each(function(index){
        card = $(this);
        if(index == 0) 
          firstMatchValue = card.html().trim();
        else {
          cardsMatch = firstMatchValue == card.html().trim();
          if(cardsMatch){
            alert('cards match!');
            visibleCards.addClass('matched').removeClass('visible_card');
            if($('.match-card').not('.matched').length == 0){
              alert('You have matched all the cards!');
              newGame = confirm('Start a New Game?')
              if(newGame)
                $('.match-card').removeClass('visible_card matched').addClass('hide');
            }
          }
          else
            alert('cards do not match!');
            $('.match-card').not('.matched').removeClass('visible_card').addClass('hide');
        }
      })
  });
});