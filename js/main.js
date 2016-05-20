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
        $('.input').focus();
        
    });
    
    
    
    
    function addItem(title){
        console.log('add item "'+title+'"');
        var node = $(TEMPLATE_ITEM);
        var name = node.find('.not-sold-title');
        var name_sold = node.find('.sold-title');
        var name_edit = node.find('.title-edit');
        var minus = node.find('.minus-button-active');
        var minus_non = node.find('.minus-button-inactive');
        var plus = node.find('.plus-button');
        var amount = node.find('.item-amount');
        var sold = node.find('.sold-button');
        var non_sold = node.find('.non-sold-button')
        var remove = node.find('.remove-button');
        addLable(title);
        var lable = LABLES_REMAINED.find('#'+title+'-lable');
        
        name.text(title);
        name_sold.text(title);
         
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
            name.addClass('items-sold');
            name.addClass('hidden');
            name_sold.removeClass('hidden');
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
            name.removeClass('items-sold');
            name.removeClass('hidden');
            name_sold.addClass('hidden');
            lable.removeClass('items-sold');
            lable.remove();
            LABLES_REMAINED.append(lable);
        });
        
        remove.click(function(){
            node.remove();
            lable.remove();
        });
        
        name.click(function(){
            name.addClass('hidden');
            name_edit.removeClass('hidden');
            name_edit.focus();

            

        });
        
        name_edit.focusin(function(){
            name_edit.val(name.text());
        });
        
        name_edit.focusout(function(){
            var value = name_edit.val();
                
            if(value!='' && isExclusive(value)){
                edit_name(value);
            }
            name.removeClass('hidden');
            name_edit.addClass('hidden');
        });
        
        ITEMS_LIST.append(node);
        
        function edit_name(v){
            console.log("'" + name.text()+ "' was edit: new value '" + v + "'");
            name.text(v);
            lable.find('.item-lable-name').text(v);
        }
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
