$(function(){
    var TEMPLATE_ITEM = $('.template-item').html(); 
    var TEMPLATE_LABLE = $('.template-lable').html();
    var ITEMS_LIST = $('.items-list');
    var LABLES_REMAINED = $('.items-remained');
    var LABLES_SOLD = $('.items-sold');
    
    $('.add-button').click(function(){
        console.log('add button was pressed');
        
        var value = $('.input').val();
        $('.input').val('');
        
        if(value!=='' && isExclusive(value)){
            addItem(value);
        }
        
    });
    
    
    function addItem(title){
        console.log('add item "'+title+'"');
        var node = $(TEMPLATE_ITEM);

        var minus = node.find('.minus-button-active');
        var minus_non = node.find('.minus-button-inactive');
        var plus = node.find('.plus-button');
        var amount = node.find('.item-amount');
        var sold = node.find('.sold-button');
        var non_sold = node.find('.non-sold-button')
        var remove = node.find('.remove-button');
        addLable(title);
        var lable = LABLES_REMAINED.find('#'+title+'-lable');
 
        node.find('.item-name').text(title);
        //node.attr('id',title); 
        
        minus.click(function(){
            var n = parseInt(amount.text())-1;
            
            if(n==1){
                minus.addClass('hidden');
                minus_non.removeClass('hidden');
            }
            
            amount.text(n);
            lable.find('.item-amount-lable').text(n);
        });
        
        plus.click(function(){
            var n = parseInt(amount.text())+1;
            
            if(n==2){
                minus_non.addClass('hidden');
                minus.removeClass('hidden');
            }
            
            amount.text(n);
            lable.find('.item-amount-lable').text(n);
            
        });
        
        sold.click(function(){
            if(parseInt(amount.text())>1){
                minus.addClass('hidden');
            }else{
                minus_non.addClass('hidden'); 
            }
            plus.addClass('hidden');
            sold.addClass('hidden');
            remove.addClass('hidden');
            non_sold.removeClass('hidden');
            node.find('.item-name').addClass('items-sold');
            
            lable.addClass('items-sold');
            lable.remove();
            LABLES_SOLD.append(lable);
            
            
        });
        
        non_sold.click(function(){
            if(parseInt(amount.text())>1){
                minus.removeClass('hidden');
            }else{
                minus_non.removeClass('hidden');
            }
            plus.removeClass('hidden');
            sold.removeClass('hidden');
            remove.removeClass('hidden');
            non_sold.addClass('hidden');
            node.find('.item-name').removeClass('items-sold');
            
            lable.removeClass('items-sold');
            lable.remove();
            LABLES_REMAINED.append(lable);
        });
        
        remove.click(function(){
            node.remove();
            lable.remove();
        });
        
        ITEMS_LIST.append(node);
    }
    
    function addLable(title){
        var lable = $(TEMPLATE_LABLE);
        lable.find('.item-lable-name').text(title);
        lable.attr('id',title+'-lable');
        LABLES_REMAINED.append(lable);
    }
    
    
    function isExclusive(title){
        
        //this method will be done later
        return true;
    }
    
    addItem('Помідори');
    addItem('Сир');
    addItem('Хліб');
});
