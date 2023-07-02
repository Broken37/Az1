# Az1

۱. پوشه‌ی .git یک پوشه‌ی مخفی است که در داخل ریپازیتوری Git قرار دارد. این پوشه حاوی تمام اطلاعات مربوط به تاریخچه‌ی تغییرات، شاخه‌ها، تنظیمات و سایر اطلاعات مربوط به ریپازیتوری است.

در پوشه‌ی .git، اطلاعات زیر ذخیره می‌شود:

شاخه (branch): اطلاعات مربوط به شاخه‌های مختلف ریپازیتوری در فایل HEAD و فایل های refs/heads ذخیره می‌شود.

تاریخچه (history): همهٔ تغییرات صورت گرفته در ریپازیتوری در فایل objects ذخیره می‌شود. هر commit گذشته و حال را نگهدارد.

شناسنامۀ (index): لحظۀ کنونۀ فایل‌های پروژۀ شما در فایل index ذخیره مي شود.

تنظيمات (configurations): تنظيمات Git برای ريپازيتوري در فايل config ذخيره می‌شود.

پوشه‌ی .git با دستور "git init" ساخته می‌شود. این دستور در پوشه‌ای که قرار است ریپازیتوری جدید در آن ایجاد شود، اجرا می‌شود و پوشه‌ی .git به صورت خودکار ساخته می‌شود.

۲. در مورد atomic commit، وقتی که تغییراتی در یک سیستم نرم‌افزاری اعمال می‌شود، این تغییرات به صورت اتمی (atomic) اعمال می‌شوند. به عبارت دقیق‌تر، هرگونه تغییر در ساختار داده‌ها یا فایل‌های موجود در سیستم نرم‌افزاری به صورت کامل و چندان پذیرفتنی برای سایر عناصر سامانه اعمال می‌شود یا همگام می‌شود. به عبارت دقیق‌تر، هنگام اعمال تغییرات، تغییرات باید به صورت کامل و قابل بازگشت باشند؛ به طور مثال، اگر چندین فایل در حین چک کردن (checkout) نسخه جدید بروز شده باشند و خطای رخ داده باشد، همه فایل‌ها باید به حالت قبل بازگردانده شوند.

و Atomic pull-request نوع ديگري از atomic commit است که در زمان استفاده از Git و GitHub بکار مي رود. وقتي يک تغيير در يک پروژه Git انجام مي شود، تغييرات به صورت atomic commit اعمال مي شوند. در صورتي که يک تغيير به عنوان یک pull-request به یک برنچ (branch) دیگر اضافه شود، این pull-request نیز باید به صورت atomic باشد. به عبارت دقیق‌تر، همه تغییرات موجود در pull-request باید به صورت کامل و قابل بازگشت باشند؛ به طور مثال، اگر چندین فایل در حین pull-request تغییر کرده باشند و خطای رخ داده باشد، همه فایل‌ها باید به حالت قبل بازگردانده شوند.

۳. و

Fetch:
   - دستور fetch اطلاعات آخرین تغییرات را از ریپازیتوری اصلی (remote repository) به ریپازیتوری محلی (local repository) منتقل می‌کند.
   - با استفاده از fetch، شما فقط اطلاعات تغییرات را دریافت می‌کنید و فایل‌های کار نشده در ریپازیتوری محلی شما تغییر نمی‌کنند.
   - شما معمولاً برای بروزرسانی وضع قبل از شروع کار جدید با استفاده از fetch استفاده می‌کنید.

Pull:
   - دستور pull همانند دستور fetch عمل مشابه را انجام می‌دهد، با این تفاوت که همچنین تغذية خودکار فایل‌های کار نشده را انجام می‌دهد.
   - با استفاده از pull، شما تغییرات را از ریپازیتوری اصلی دریافت کرده و فایل‌های کار نشده در ریپازیتوری محلی خود را به‌روز می‌کنید.
   - شما معمولاً برای بروزرسانی وضع قبل از شروع کار جدید با استفاده از pull استفاده می‌کنید.

Merge:
   - دستور merge برای ترکیب تغییرات دو شاخه (branch) در گیت استفاده می‌شود.
   - با استفاده از merge، شما تغییرات چندین شاخه را به گونه‌ای که همگام باشند، ترکیب می‌کنید.
   - بعد از merge، تغييرات همگام سازي شده در گيت قابل دسترسي خواهد بود.
   - شما معمولاً برای ادغام (merge) تغييرات يك شاخه فرعي (branch) با شاخه اصلي (master branch) استفاده مي كنيد.

۴. و

Reset:
دستور reset در git برای بازگشت به یک commit قبلی استفاده می‌شود. با استفاده از این دستور، می‌توانید HEAD را به commit مورد نظر تغییر دهید و تغییرات اعمال شده پس از آن commit را حذف کنید. این دستور برای حذف تغییرات لحظه‌ای و برگشت به یک نقطه قبلی در تاریخچه پروژه مناسب است.

Revert:
دستور revert در git برای اعمال تغییرات یک commit خاص به صورت معکوس استفاده می‌شود. با استفاده از این دستور، یک commit جدید ساخته می‌شود که تغییرات معکوس شده را در خود جایگزین commit قبلی می‌کند. به عبارت دقیق‌تر، revert چندین commit جدید نمی‌سازد، بلکه فقط چندین commit جدید را به branch فعلی اضافه می‌کند.

Rebase:
دستور rebase در git برای تغییر تاریخچه branch فعلی با branch دیگر استفاده می‌شود. با استفاده از این دستور، می‌توانید commit های branch فعلی را بر روی commit های branch دیگر قرار دهید و تاریخچه پروژه را بازنویسی کنید. این دستور برای ادغام تغییرات در branch فعلی با تغییرات در branch دیگر مناسب است.

Restore:
دستور restore در git برای بازگرداندن یک فایل به وضعیت قبل از تغییرات استفاده می‌شود. با استفاده از این دستور، می‌توانید تغییرات یک فایل خاص را کاملاً حذف کنید و آن را به وضع قبل از تغییر برگردانید.

۵. در مفهوم گیت، stage به معنای آماده‌سازی تغییرات برای commit است. به عبارت دیگر، stage فرآیند اضافه کردن تغییرات به commit است. با استفاده از دستور git add، می‌توانید تغییرات را به stage اضافه کنید و سپس با استفاده از دستور git commit، تغییرات را در commit ذخیره کنید.

دستور stash در گیت برای ذخیره تمام تغییرات غیر commit شده در working directory و index استفاده می‌شود. با دستور stash می‌توانید تمام تغییرات را در یک stash جدید ذخیره کنید و working directory و index را پاک کنید. این عملکرد بسیار مفید است زمانی که شما نمی‌خواهید تغییرات خود را commit کنید ولی نیز نمی‌خواهید آن‌ها را از دست بدهید.

۶. و Snapshot به معنای یک تصویر یا نمونه از حالت فعلی یک سیستم است. در علوم کامپیوتر، snapshot به معنای ثبت وضعیت فعلی یک سیستم، اطلاعات و داده‌های آن در یک زمان خاص است. این تصویر ممکن است شامل حالت سخت‌افزار، حالت نرم‌افزار، داده‌ها و تنظیمات مربوط به سیستم باشد. Snapshot ها برای بسیاری از کاربردها مفید هستند، از جمله پشتیبان‌گیری، بازگرداندن به حالت قبل، تست و عیب‌یابی سخت‌افزار و نرم‌افزار و مدیریت منابع استفاده مورد نظر.
