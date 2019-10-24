export const state = () => ({
    rules : []
});

export const mutations = {
    add(state, title = Date.now(), desc) {
        state.rules.push({ title, desc });
    },

    remove(state, { rule }) {
        state.list.splice(state.list.indexOf(rule), 1);
    },

    toggle(state, rule) {
        rule.done = !rule.done;
    }
}