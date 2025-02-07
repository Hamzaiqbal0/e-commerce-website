

export default {
    name : 'order',
    title : 'Order',
    type : 'document',
    fields : [
        {
            name : 'firstName',
            title : 'First Name',
            type : 'string'
        },
        {
            name : 'lastName',
            title : 'Last Name',
            type : 'string',           
        },
        {
            name : 'address',
            title : 'Address',
            type : 'string'
        },
        {
            name : 'city',
            title : 'City',
            type : 'string',
        },
        {
            name : 'zipCode',
            title : 'Zip Code',
            type : 'string',
        },
        {
            name : 'email',
            title : 'Email',
            type : 'string',
        },
        {
            name : 'phone',
            title : 'Phone',
            type : 'string',
        },
        {
            name : 'cartItems',
            title : 'Cart Items',
            type : 'array',
            of : [{
                    type : 'reference', to : {type : 'order'}}]
        },
        {
            name : 'total',
            title : 'Total',
            type : 'number',
        },
        {
            name : 'status',
            title : 'Order Status',
            type : 'string',
            option : {

                list : [
                    {value : 'pending', title : 'Pending'},
                    {value : 'processing', title : 'Processing'},
                    {value : 'shipped', title : 'Shipped'},
                    {value : 'delivered', title : 'Delivered'},
                    {value : 'cancelled', title : 'Cancelled'},
                ],
                layout : 'radio'
            }
            ,
            initialValue : 'pending'
        }
    ]
}
