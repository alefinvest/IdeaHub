// cbl_app/components/Dashboard.js
import TransactionForm from './TransactionForm';
import CurrencyConverter from './CurrencyConverter';

export default function Dashboard() {
    return (
        <div>
            <h2>Welcome to CryptoBankLink</h2>
            <TransactionForm />
            <CurrencyConverter />
        </div>
    );
}