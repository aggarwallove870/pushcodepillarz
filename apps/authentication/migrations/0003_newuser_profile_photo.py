# Generated by Django 4.0.6 on 2022-07-07 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='profile_photo',
            field=models.ImageField(default=1, upload_to='images'),
            preserve_default=False,
        ),
    ]
