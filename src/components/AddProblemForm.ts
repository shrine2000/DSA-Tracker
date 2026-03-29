export const renderAddProblemForm = (categories: string[]) => {
    return `
        <section class="add-problem-section animate-in">
            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Add Custom Problem</h2>
            <div class="form-group">
                <input type="text" id="custom-problem-link" placeholder="LeetCode URL" />
                <select id="custom-problem-topic">
                    <option value="" disabled selected>Select Topic</option>
                    ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
                    <option value="Other">Other</option>
                </select>
                <select id="custom-problem-difficulty">
                    <option value="Easy">Easy</option>
                    <option value="Medium" selected>Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <button id="add-custom-problem-btn" class="add-btn">Add Problem</button>
            </div>
        </section>
    `;
};
