
export class Table {
    
    UserRecord(): {}[] {
      let user1:[
            {
                username:'tejas',
                password:'tejas123',
                email:'tejas@123',
                address:'thane'
        
            },
            {
                username:'lion',
                password:'lion123',
                email:'lion@123',
                address:'raigad'
            },
            {
                username:'tiger',
                password:'tiger123',
                email:'tiger@123',
                address:'mulund'
            }
        ];
        return user1;
    }
   



    CourseRecord() :{}[] {
        let user2:[
        {
            author:'tejas',
            title:'King',
            price:'1000000rs',
            publishedDate:'12|2|2019'
    
        },
        {
            author:'tiger',
            title:'Hello',
            price:'100rs',
            publishedDate:'13|2|2019'
        },
        {
            author:'lion',
            title:'hi',
            price:'200rs',
            publishedDate:'14|2|2019'
        }
    ];
    return user2;
}
    
}