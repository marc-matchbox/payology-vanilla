// Dates
const currentYear = document.getElementById('currentYear')
const currentDueDate = document.getElementsByClassName('currentDueDate')

// Forms
const paymentAmount = document.getElementById('paymentAmount')
const nameAccount = document.getElementById('nameAccount')
const accountType = document.getElementById('accountType')
const routingNumber = document.getElementById('routingNumber')
const accountNumber = document.getElementById('accountNumber')
const confirmAccountNumber = document.getElementById('confirmAccountNumber')
const checkboxTerms = document.getElementById('checkboxTerms')

// Buttons
const paymentButton = document.getElementById('paymentButton')

// Amount
const invoiceAmount = document.getElementsByClassName('invoice-amount')

const printPageArea = areaID => {
	var printContent = document.getElementById(areaID)
	var WinPrint = window.open('', '', 'width=900,height=650')
	WinPrint.document.write(
		`<link rel="stylesheet" href="/assets/css/style.css" />${printContent.innerHTML}`
	)
	WinPrint.document.close()
	WinPrint.focus()
	WinPrint.print()
	// WinPrint.close()
}

const insertSameValueOnClass = (className, value) => {
	const classNameToInsertValue = document.getElementsByClassName(className)
	Array.from({ length: classNameToInsertValue.length }).map((_, idx) => {
		classNameToInsertValue.item(idx).innerHTML = value
	})
}

const insertSameValueOnId = (id, value) => {
	const idToInsertValue = document.getElementById(id)
	idToInsertValue.innerHTML = value
}

document.addEventListener('DOMContentLoaded', () => {
	const date = new Date()
	currentYear.innerHTML = date.getFullYear()
	const formattedDate = new Intl.DateTimeFormat('en-US').format(date)

	insertSameValueOnClass('invoice-amount', '$0.00')
	insertSameValueOnClass('current-due-date', formattedDate)
})

paymentAmount.addEventListener('input', evt => {
	const value = evt.target.value

	if (!value) {
		insertSameValueOnClass('invoice-amount', '$0.00')
	} else {
		insertSameValueOnClass('invoice-amount', `$${Number(value).toFixed(2)}`)
	}
})

nameAccount.addEventListener('input', evt => {
	insertSameValueOnId('printNameOnAccount', evt.target.value)
})
accountType.addEventListener('input', evt => {
	insertSameValueOnId(
		'printAccountType',
		evt.target.value === '1' ? 'Active' : 'Deactive'
	)
})
routingNumber.addEventListener('input', evt => {
	insertSameValueOnId('printRoutingNumber', evt.target.value)
})
accountNumber.addEventListener('input', evt => {
	insertSameValueOnId('printAccountNumber', evt.target.value)
})
confirmAccountNumber.addEventListener('input', evt => {
	insertSameValueOnId('printConfirmAccountNumber', evt.target.value)
})

paymentButton.addEventListener('click', () => {
	if (checkboxTerms.checked) {
		printPageArea('paymentAreaPrint')
	} else {
		alert('Agree our terms and conditions')
	}
})
