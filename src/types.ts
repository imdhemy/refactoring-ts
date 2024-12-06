export type PerformanceStatement = {
    amount: number;
    volumeCredits: number;
    perf: any,
};

export type StatementData = {
    customer: string;
    performanceStatementList: PerformanceStatement[];
    totalAmount: number;
    totalVolumeCredits: number;
};

export type Performance = {
    type: string;
    name: string;
    audience: number;
} & any;
