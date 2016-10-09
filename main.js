$(document).ready(function() {
    var ITEM_TEMPLATE = $(".bl-row-temp").html();
    var ITEM_BUTTONS=$(".bl-buttons").html();
    var ITEM_TEMP_BUTTON=$(".bl-boughted-temp").html();
    var ITEM_BOUGHTED=$('.temp').html();
    var ITEM_COUNTER= $(".bl-label").html();
    var ITEM_BOUGHT_COUNTER=$(".bl-boughtBag").html();
    var lIST=$(".bl-list");
    var BOUGHT=$(".bl-bought-left");
    var BOUGHTED=$(".bl-title-temp");
    $("#add-But").click(function() {
       var input = $(".input-item");
       var value = input.val();
       addItem(value);
    });
    
    
    function addItem(title) {
       if(title){
           var node =$(ITEM_TEMPLATE);
           var nodeBoughted = $(ITEM_BOUGHTED);
           var temp_button=$(ITEM_TEMP_BUTTON);
           var buttons = $(ITEM_BUTTONS);
           var count=ITEM_COUNTER;
           var countBoughted=ITEM_BOUGHT_COUNTER;
           $(node).find(".bl-product").text(title);
           $(nodeBoughted).find(".bl-label1").text(title);
           //$(nodeBoughted).find(".bl-boughtBag").text("1");
           
           lIST.append(node);
           BOUGHT.append(nodeBoughted);
           $(node).find(".bl-cancel").click(function()  {
               $(node).fadeOut(1000,
                    function(){
                    $(node).remove();
                    $(nodeBoughted).remove();
               })
               
           
           });
          
           $(node).find(".bl-plus").click(function() {
               $(node).find('.bl-label').html(++count);
               $(nodeBoughted).find('.bl-boughtBag').html(++countBoughted);
               $(node).find('.bl-mines').addClass('state-active');
               $(node).find(".bl-mines").prop("disabled",count<=1);
            
    
               
           });
           
           $(node).find(".bl-mines").click(function() {
               $(node).find(".bl-mines").prop("disabled",count<=2);
               $(node).find('.bl-label').html(--count);
               $(nodeBoughted).find('.bl-boughtBag').html(--countBoughted);
               
           });
           
            $(node).find(".bl-boughted").click(function() {
            $(node).find(".bl-boughted").hide();
            $(node).find(".bl-boughted-unsold").show(); 
            $(node).find(".bl-mines").hide();
            $(node).find(".bl-plus").hide();
            $(node).find(".bl-cancel").hide(); 
            $(node).find(".bl-product").css("text-decoration" ,"line-through");
            $(nodeBoughted).find(".bl-label1").text($(node).find(".bl-product").text());
            $(nodeBoughted).find(".bl-boughtBag").text(count);
            $(nodeBoughted).find(".bl-label1").css("text-decoration" ,"line-through");
            BOUGHTED.append(nodeBoughted);
            BOUGHT.remove(nodeBoughted);
                
                
           });
           
            $(node).find(".bl-boughted-unsold").click(function() {
            $(node).find(".bl-boughted-unsold").hide();
            $(node).find(".bl-boughted").show();
            $(node).find(".bl-mines").show();
            $(node).find(".bl-plus").show();
            $(node).find(".bl-cancel").show();
            $(node).find(".bl-product").css("text-decoration" ,"none");
            $(nodeBoughted).find(".bl-label1").css("text-decoration" ,"none");
            BOUGHT.append(nodeBoughted);
            BOUGHTED.remove(nodeBoughted);
                
           });
           
           $(node).find(".bl-product").click(function(){
           $(node).find(".input-redact").val($(node).find(".bl-product").text());
           $(node).find(".bl-product").hide();
           $(node).find(".input-redact").show();
          




           });


           $(node).find(".input-redact").focusout(function(){
           $(node).find(".input-redact").hide();
           var input = $(node).find(".input-redact");
           var input_copy = input.val();
           $(node).find(".bl-product").text(input_copy);
           $(node).find(".bl-product").show();
           $(nodeBoughted).find(".bl-label1").text(input_copy);
               
           })
           
           
           
       }  
    }
    
    
    addItem("Помідори");
    addItem("Сир");
    addItem("Печиво");
    




});

