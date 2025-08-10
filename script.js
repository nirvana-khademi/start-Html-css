document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // جلوگیری از رفرش شدن صفحه

    const username = document.getElementById("username");

    // حذف حالت ارور قبلی
    username.classList.remove("error");

    // اگر ورودی خالی باشه
    if (username.value.trim() === "") {
        username.classList.add("error");
    } else {
        alert("فرم با موفقیت ارسال شد ✅");
    }
});
