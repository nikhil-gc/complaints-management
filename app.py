# import pandas as pd
# import numpy as np
# from pandasai import PandasAI
# from pandasai.llm.openai import OpenAI 
# import sys 
# from pandasai.smart_dataframe import SmartDataframe 
# import logging
# import statistics

# # Configure the logging
# logging.basicConfig(filename='my_model.log', level=logging.DEBUG)
# try:
#     # Your machine learning model code here
#     # ...

#     # Log a message
#     logging.info('Model execution completed successfully')

# except Exception as e:
#     # Log any exceptions that occur
#     logging.error(f'An error occurred: {str(e)}')



# # print("python code running")
# # print("Hello World")
# x = sys.argv[2]
# xvalue = [str(num) for num in sys.argv[3].split(',')]
# y = sys.argv[4]
# yvalue =[int(num) for num in sys.argv[5].split(',')]
# # print(x,xvalue,y,yvalue)
# # print(data)
# df = pd.DataFrame({x:xvalue, y:yvalue})
# API_KEY = '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'
# llm = OpenAI(api_token=API_KEY)
# # pandas_ai = PandasAI(llm, conversational=False) 
# sdf = SmartDataframe(df, config={"llm": llm})

# inp = str(sys.argv[1]) 
# # inp = "Give me complete summary and business analysis of the data"
# response = sdf.chat(inp)
# print(response) 







import pandas as pd
import sys
import asyncio
import logging

from pandasai.llm.openai import OpenAI
from pandasai.smart_dataframe import SmartDataframe

# Configure the logging
logging.basicConfig(filename='my_model.log', level=logging.DEBUG)


async def main():
    x = sys.argv[2]
    xvalue = [str(num) for num in sys.argv[3].split(',')]
    y = sys.argv[4]
    yvalue = [int(num) for num in sys.argv[5].split(',')]
    
    df = pd.DataFrame({x: xvalue, y: yvalue})
    API_KEY = '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'
    llm = OpenAI(api_token=API_KEY)
    sdf = SmartDataframe(df, config={"llm": llm})

    inp = str(sys.argv[1])

    try:
        # Make an asynchronous API call
        response =  sdf.chat(inp)
        print(response)
        # Log a message
        logging.info('Model execution completed successfully')

    except Exception as e:
        # Log any exceptions that occur
        logging.error(f'An error occurred: {str(e)}')


if __name__ == '__main__':
    # Run the asynchronous main function
    asyncio.run(main())
