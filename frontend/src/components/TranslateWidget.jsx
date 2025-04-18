import { useEffect } from "react";

// https://www.w3schools.com/howto/howto_google_translate.asp
export default function TranslateWidget() {
    // includedLanguages: "en,es,fr,de,it,zh-CN,ja,ko,hi",

    useEffect(() => {
        if (window.googleTranslateElementInit) return; // prevent duplicate init

        window.googleTranslateElementInit = function () {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    autoDisplay: false,
                    includedLanguages: "en,es,fr,de,it,zh-CN,ja,ko,hi",
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                },
                "google_translate_element"
            );
        };

        const script = document.createElement("script");
        script.src =
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
    }, []);


    return (
        <>
            <div id="google_translate_element"></div>
        </>
    );
}
