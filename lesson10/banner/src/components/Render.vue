<script>
import Button from "@/components/Button"
export default {
    render(createElement){
        return createElement(Button,{
            props:{
                value:"按钮"
            },
            on:{
                click:()=>{
                    alert("123")
                }
            }
        })
    }        
}
</script>

<style scoped>

</style>