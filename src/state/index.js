import { ref, reactive } from 'vue'
import ViewModel from "../models/viewModel";

export default {
    viewModel: reactive(new ViewModel())
}