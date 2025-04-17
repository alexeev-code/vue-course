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
        inputData(event) {
            this.inputValue = event.target.value
        },
        addNote() {
            if (this.inputValue !== '') {
                this.noteList.push(this.inputValue)
                this.inputValue = ''
            }
        },
        doubleCount(){
            console.log('TUT!!!')
            return this.noteList.length * 2
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
        deleteNote(i) {
            this.noteList.splice(i, 1)
        }
    }
}

Vue.createApp(App).mount('#app')
