<template>
    <div id="uploaderSidebar" class="sidebarItem">
        <b-field>
            <b-upload @input="onFileSelect" v-model="dropFiles"
                accept="image/jpeg"
                drag-drop>
                <div class="section">
                    <div class="content has-text-centered">
                        <p>Drop your files here or click to preview</p>
                    </div>
                </div>
            </b-upload>
            <!-- <b-modal :active.sync="isImageModalActive">
                <p class="image">
                    <img id="previewImage" v-bind:src="this.previewImageURL">
                </p>
            </b-modal> -->
            <b-modal :active.sync="isImageModalActive" scroll="keep">
                <div class="card">
                    <div class="card-image">
                        <vue-cropper
                        ref="cropper"
                        :src="this.previewImageURL"
                        alt="Source Image"
                        />
                    </div>
                    <div class="card-content">
                        <b-button
                        class="cropperButton"
                        @click.prevent="getCropData"
                        type="is-primary">Console</b-button>
                        <b-button
                        class="cropperButton"
                        @click.prevent="setCroppedImage"
                        type="is-success">Crop</b-button>
                        <b-button
                        class="cropperButton"
                        type="is-danger"
                        outlined>Upload Cropped</b-button>
                    </div>
                        <img id="cropPreview" v-if="isImageCropped" :src='croppedImageURL' />
                </div>
            </b-modal>
        </b-field>

        <div class="tags">
            <span v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
            </span>
        </div>
    </div>
</template>

<script>
    import VueCropper from 'vue-cropperjs';
    import 'cropperjs/dist/cropper.css';

    export default {
        components : {
            VueCropper
        },
        
        data() {
            return {
                dropFiles: [],
                isImageModalActive : false,
                previewImageURL : "",
                isImageCropped : false,
                croppedImageURL : ""
            }
        },
        methods: {
            deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
            },

            getCropData() {
                let jsonData = JSON.stringify(this.$refs.cropper.getData(), null, 4)
                console.log(jsonData)
            },

            setCroppedImage() {
                // Not Working :(
                this.croppedImageURL = this.$refs.cropper.getCroppedCanvas().toDataURL("image/jpeg")
                this.isImageCropped = true
                console.log(this.previewImageURL)
            },

            onFileSelect(file){
                // console.log(file)
                let fileURL = URL.createObjectURL(file)
                // console.log(fileURL)
                this.previewImageURL = fileURL
                this.isImageModalActive = true
                console.log(this.$parent)
            }
        }
    }
</script>

<style scoped>
#uploaderSidebar {
    box-shadow: none !important;
    margin-bottom: 20px !important;
}

.cropperButton{
    margin: 8px;
}

#cropPreview{
    max-height: 200px;
    margin: 10px;
}
</style>