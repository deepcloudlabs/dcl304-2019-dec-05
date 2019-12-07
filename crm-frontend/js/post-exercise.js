class Customer {
    constructor(identityNo, fullname) {
        this.identityNo = identityNo;
        this.fullname = fullname;
    }

}

let customers = [ ];
for (let i=10000;i<100000;++i)
    customers.push(
        new Customer(`555555${i}`, `Customer 5${i}`)
    );
customers.forEach( customer => {
    console.log(`Adding customer ${customer.identityNo}`)
    fetch("http://localhost:4001/customers",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    })
    .then(res => res.json())
    .then( status => console.log(status))
});
