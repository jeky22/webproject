<template>
    <div class="outer">
        <div class="inner">
            <div class="notice">
                Writer :  <input type="text" name="writer" required v-model="notice.writer" placeholder="글쓴이">
                <br>
                <br>
                Title : <input type="text" name="title" required v-model="notice.title" placeholder="제목">
                <br>
                <br>
                Content
                <br>
                <textarea name="content" required v-model="notice.content" placeholder="내용"></textarea>
                <br>
                <button  @click="editNotice" class="mybtn">수정</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

        data(){
            return{

                notice:{
                    writer: "",
                    title: "",
                    content: "",
                    noticeID:""
                },

            }
        },
        methods:{
            async editNotice() {
                const res = await this.$store.dispatch('updateStudyBoard', { id: this.$route.params.id, data: this.notice })
                if(res.success === false) alert(res.message)
                else this.$router.push(`/study/${this.$route.params.id}/board`)
            }

        },
        async beforeCreate() {
            const res = await this.$store.dispatch('fetchStudyBoard', {id : this.$route.params.id, idx:this.$route.params.temp})
            if(res.success === false) alert(res.message)
            else {
                this.notice = res.result
                this.notice.noticeID =this.$route.params.temp
            }
            },

    }

</script>
<style>
    .outer{
        display: table;
        width: 100%;
        height: 100%;
    }
    .inner{
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .notice{
        width: 60%;
        height: 100px;
        margin: auto;
        text-align: center;

    }
    .mybtn{
        border-radius:10px;
        background-color: #ecd7d2 !important;
    }

</style>