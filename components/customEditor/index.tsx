import Editor from "@/ckeditor5/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

type MyCKEditorProps = {
  initialData: string;
  setData: (value: string) => void;
};

export default function MyCKEditor(props: MyCKEditorProps) {
  return (
    <div className="">
      <div className="prose">
        <CKEditor
          editor={Editor}
          data={props.initialData}
          onChange={(event, editor) => {
            const data = editor.getData();
            props.setData(data);
          }}
        />
      </div>
    </div>
  );
}
