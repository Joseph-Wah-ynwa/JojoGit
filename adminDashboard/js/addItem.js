let category=['Phone','Computer','Car','Sport'];
        let subcategory=[
            {
                name:'Iphone',
                category_id:0
            },
            {
                name:'Samsung',
                category_id:0
            },
            {
                name:'Google Pixel',
                category_id:0
            },
            {
                name:'Lenovo',
                category_id:1
            },
            {
                name:'Apple',
                category_id:1
            },
            {
                name:'Asus',
                category_id:1
            },
            {
                name:'Toyota',
                category_id:2
            },
            {
                name:'Lexes',
                category_id:2
            },
            {
                name:'Nissan',
                category_id:2
            },
            {
                name:'Football',
                category_id:3
            },
            {
                name:'Martial Art',
                category_id:3
            },
            {
                name:'Beskket Ball',
                category_id:3
            }
        ];

        category.map(function(el,index){
            $('#category').append(`<option value="${index}">${el}</option>`);
        });

        subcategory.map(function(el,index){
            $('#sub_category').append(`<option value="${index}" data-category="${el.category_id}">${el.name}</option>`);
        });

        $('#category').change(function(){
            let c=$(this).val();
            $('#sub_category option').hide();
            $(`[data-category="${c}"]`).show();
           
        });

       

