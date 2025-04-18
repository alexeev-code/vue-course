const App = {
    data() {
        return {
            title: 'Note list',
            placeholderString: 'text...',
            inputValue: '',
            noteList: []
        }
    },
    methods: {
        addNote() {
            if (this.inputValue !== '') {
                this.noteList.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(i) {
            this.noteList.splice(i, 1)
        }
    },
    computed: {
        doubleCount(){
            return this.noteList.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')
