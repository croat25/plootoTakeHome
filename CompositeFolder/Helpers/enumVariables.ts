export enum testingCategory {
    setupPayments = 'SetupPayments',
    approvedPayments = 'ApprovePayments',
    pendingPayments = 'PendingPayments',
    completedPayments = 'CompletedPayments',
    fxCalculator = 'FxCalculator'
}

export enum aTagOptions {
    pdf = 'Export PDF',
    edit = 'Edit',
    delete = 'Delete'
}

export enum detailHeaderOptions {
    paymentAttachments = 'Payment Attachments',
    paymentApprovalHistory = 'Payment Approval History',
    paymentLineItems = 'Payment Line Items',
    additionalDetails = 'Additional Details'
}

export enum buttonOptions {
    approve = 'Approve',
    reject = 'Reject'
}