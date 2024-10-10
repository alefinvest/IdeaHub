export default function TransactionForm() {
    return (
        <form>
            <label>
                Amount:
                <input type="number" name="amount" required />
            </label>
            <label>
                Currency:
                <select name="currency">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </label>
            <button type="submit">Submit Transaction</button>
        </form>
    );
}
