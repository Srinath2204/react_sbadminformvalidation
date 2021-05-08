import Card from './card';

export default function Dashboard(){
    let savings = [
        {
            earnings : "Earnings (MONTHLY)",
            amount : "$40,000",
            icon : "fas fa-calendar fa-2x text-gray-300"
        },
        {
            earnings : "Earnings (ANNUAL)",
            amount : "$215,000",
            icon : "fas fa-dollar-sign fa-2x text-gray-300"
        },
        {
            earnings : "TASKS",
            amount : "50%",
            icon : "fas fa-clipboard-list fa-2x text-gray-300"
        },
        {
            earnings : "PENDING REQUESTS",
            amount : "18",
            icon : "fas fa-comments fa-2x text-gray-300"
        },
    ]
    return <>
     <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#!" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>

    <div class="row">
    {
        savings.map((obj) => {
        return <Card data={obj}></Card>
    })
    }
    </div>
    </>
}